// Chemin d'un fichier de /public, valable que le site soit servi à la racine ou dans un sous-dossier.
export const asset = (path) => `${process.env.PUBLIC_URL || ''}${encodeURI(path)}`;
