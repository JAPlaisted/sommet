export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Technology" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Business" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Tutorial" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
