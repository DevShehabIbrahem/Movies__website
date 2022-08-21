const usecutWords = (banner: any) => {
  const CutWords =
    banner?.overview?.length > 100
      ? banner?.overview.slice(0, 100) + ",..."
      : banner?.overview;
  return { CutWords };
};

export default usecutWords;
