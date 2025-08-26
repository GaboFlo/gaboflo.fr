export const generateProjectShareLink = (projectId: string): string => {
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}?project=${projectId}`;
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Erreur lors de la copie :", error);
    return false;
  }
};
