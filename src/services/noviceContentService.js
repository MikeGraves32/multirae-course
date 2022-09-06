const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function getTitles(learningTrack) {
  const response = await fetch(
    baseUrl + "titles?learningTrack=" + learningTrack
  );
  if (response.ok) return response.json();
  throw response;
}

export async function getTitle(id) {
  const response = await fetch(baseUrl + "titles/" + id);
  if (response.ok) return response.json();
  throw response;
}
