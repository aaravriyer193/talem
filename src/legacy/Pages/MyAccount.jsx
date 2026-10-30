import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db, storage } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import ProfilePictureSection from "../Components/Profile/PictureSection";
import ProfileInfoSection from "../Components/Profile/InfoSection";
import DeleteAccountSection from "../Components/Auth/DeleteAccountSection";
import Modal from "../Components/Auth/UpdateAccountModal";
import {
  deleteUser,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
  GoogleAuthProvider,
  EmailAuthProvider,
} from "firebase/auth";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const MyAccount = () => {
  const { authenticate, user } = useAuth();
  const [userData, setUserData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [fieldToUpdate, setFieldToUpdate] = useState("");
  const [file, setFile] = useState(null);


  useEffect(() => {
    if (!user?.uid) {
      return;
    }
    const handleGetUser = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        toast.error("User does not exist in the Talem firebase DB");
      }
    };
    handleGetUser();
  }, [user?.uid]);

  const MAX_LENGTH = 100;

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  const isValidFirebaseStorageUrl = (url) => {
    const firebaseStorageUrlPattern =
      /^https:\/\/firebasestorage\.googleapis\.com\/v0\/b\/[a-zA-Z0-9-]+\.appspot\.com\/o\/.+$/;
    return firebaseStorageUrlPattern.test(url);
  };

  const reauthenticate = () => {
    const providerData = user.providerData;
    if (providerData.length === 0) {
      return Promise.reject(new Error("No authentication provider found."));
    }

    const emailProvider = providerData.find(
      (provider) => provider.providerId === EmailAuthProvider.PROVIDER_ID
    );
    const googleProvider = providerData.find(
      (provider) => provider.providerId === GoogleAuthProvider.PROVIDER_ID
    );

    if (emailProvider) {
      const password = prompt("Please enter your password to re-authenticate:");
      if (password) {
        const credential = EmailAuthProvider.credential(user.uid, password);
        return reauthenticateWithCredential(user, credential);
      } else {
        return Promise.reject(new Error("Password input was cancelled."));
      }
    } else if (googleProvider) {
      const googleAuthProvider = new GoogleAuthProvider();
      return reauthenticateWithPopup(user, googleAuthProvider);
    } else {
      return Promise.reject(new Error("Unsupported authentication provider."));
    }
  };

  const handleDeleteUser = async () => {
    try {
      if (!user || !user.uid) {
        throw new Error("User is not authenticated.");
      }

      const deletedUserEmail = user.uid;

      await reauthenticate();

      try {
        const userDocRef = doc(db, "users", deletedUserEmail);
        await deleteDoc(userDocRef);
        await deleteUser(user);

        let deletedUserPhotoURL = userData.photoURL;

        if (
          deletedUserPhotoURL &&
          isValidFirebaseStorageUrl(deletedUserPhotoURL)
        ) {
          const photoRef = ref(storage, deletedUserPhotoURL);
          try {
            await deleteObject(photoRef);
          } catch (storageError) {
            console.error("Firebase Storage error:", storageError.message);
            toast.warning("User photo could not be deleted.");
          }
        }

        toast.success("User has been deleted successfully.");
      } catch (authError) {
        console.error("Firebase Auth error:", authError.message);
        toast.error(
          "Error: User could not be deleted from Firebase Authentication."
        );
      }
    } catch (error) {
      console.error("Error during user deletion:", error.message);
      toast.error("Error: " + error.message);
    }
  };

  useEffect(() => {
    const uploadProfilePicture = async () => {
      if (file) {
        let uniqueId = uuidv4();
        const storageRef = ref(storage, `users/${uniqueId}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          () => {},
          (error) => {
            toast.error(error.message);
            console.error(error);
          },
          async () => {
            try {
              const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
              if (
                userData.photoURL &&
                isValidFirebaseStorageUrl(userData.photoURL)
              ) {
                const currentPhotoRef = ref(storage, userData.photoURL);
                await deleteObject(currentPhotoRef);
              }

              const userDocRef = doc(db, "users", user.uid);

              await updateDoc(userDocRef, {
                photoURL: downloadUrl,
              });

              toast.success("Profile picture updated!");
            } catch (error) {
              console.error("Error updating profile picture:", error);
              toast.error(error.message);
            }
          }
        );
      }
    };

    uploadProfilePicture();
  }, [file, user?.photoURL]);

  const removeProfilePicture = async () => {
    try {
      if (userData.photoURL && isValidFirebaseStorageUrl(userData.photoURL)) {
        const currentPhotoRef = ref(storage, userData.photoURL);
        await deleteObject(currentPhotoRef);
        const userDocRef = doc(db, "users", user.uid);

        await updateDoc(userDocRef, {
          photoURL: "",
        });
        toast.success("Profile picture removed successfully");
      }
    } catch (error) {
      if (error.code === "storage/object-not-found") {
        console.error("Profile picture not found in storage:", error);
        toast.error("Profile picture not found in storage");
      } else {
        console.error("Error removing profile picture:", error);
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="lg:px-40 py-6">
      <div className="bg-white rounded-lg p-6 text-left">
        <h4 className="font-bold text-2xl mb-2">Account Settings</h4>
        <div
          className="flex items-center p-3 w-full text-sm text-gray-800 border rounded-lg bg-gray-100"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 mr-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>These changes will be public for anyone to view</div>
        </div>
        <hr className="h-px my-6 bg-gray-400 border-0" />
        <ProfilePictureSection
          photoURL={userData.photoURL}
          handleFileChange={(e) => setFile(e.target.files?.[0] || null)}
          removeProfilePicture={removeProfilePicture}
        />
        <ProfileInfoSection
          userData={userData}
          truncateText={truncateText}
          MAX_LENGTH={MAX_LENGTH}
          setShowModal={setShowModal}
          setFieldToUpdate={setFieldToUpdate}
        />
        <DeleteAccountSection handleDeleteUser={handleDeleteUser} />
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        field={fieldToUpdate}
      />
    </div>
  );
};

export default MyAccount;
