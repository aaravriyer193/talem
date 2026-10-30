export function opportunityNameKey(name = '') {
  return name.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]/g, '');
}

export function opportunityLinkKey(link = '') {
  try {
    const url = new URL(link);
    return `${url.hostname.replace(/^www\./, '')}${url.pathname.replace(/\/+$/, '')}`.toLowerCase();
  } catch {
    return link.toLowerCase().replace(/\/+$/, '');
  }
}

// Aliases describe the same program, not other programs from its institution.
export function appendUniqueOpportunities(existing, additions) {
  const names = new Set(existing.flatMap((ec) => [ec.name, ...(ec.duplicateNames || [])]).map(opportunityNameKey));
  const links = new Set(existing.map((ec) => opportunityLinkKey(ec.link)).filter(Boolean));
  const ids = new Set(existing.map((ec) => ec.id));
  const merged = [...existing];

  for (const ec of additions) {
    const keys = [ec.name, ...(ec.duplicateNames || [])].map(opportunityNameKey);
    const link = opportunityLinkKey(ec.link);
    if (ids.has(ec.id) || keys.some((key) => names.has(key)) || (link && links.has(link))) continue;
    merged.push(ec);
    ids.add(ec.id);
    keys.forEach((key) => names.add(key));
    if (link) links.add(link);
  }
  return merged;
}