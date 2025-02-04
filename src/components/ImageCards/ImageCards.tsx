
type ImageType = {
  img: string;
};

type ImageCardsType = {
  images: ImageType[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ImageCards : React.FC<ImageCardsType> = ({
  images,
  activeIndex,
  setActiveIndex,
}) => {
  const gotoPrevious = (currentIndex: number): number => {
    return currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
  }
  const gotoNext = (currentIndex: number): number => {
    return currentIndex + 1 >= images.length ? 0 : currentIndex + 1;
  }

  return (
    <div className="flex mb-6 md:mb-6 z-20 pt-[30px]">
      <section className="flex flex-row flex-wrap md:flex-nowrap gap-0 md:gap-4 w-full md:max-w-[1200px] items-center md:items-end justify-between z-10">
        {images?.map((item, key) => (
          <div className="w-1/3 flex justify-center items-center" key={key}>
            <button
              onClick={() => setActiveIndex(key)}
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") {
                  setActiveIndex((prev) => gotoPrevious(prev));
                } else if (e.key === "ArrowRight") {
                  setActiveIndex((prev) => gotoNext(prev));
                }
              }}
              className={`p-4 cursor-pointer  w-full md:w-full xl:w-[280px] h-auto relative ${
                activeIndex === key
                  ? "active-gradient-border md:max-w-[260px]"
                  : "opacity-70 md:max-w-[160px] "
              }`}
              tabIndex={0}
            >
              <img
                src={item.img}
                alt={`Thumbnail ${key + 1}`}
                className="w-full h-auto rounded-md"
              />
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ImageCards;