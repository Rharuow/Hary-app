const keyWords = [
  "ReactJs/NextJs",
  "React",
  "NodeJs",
  "ReactJs",
  "NextJs",
  "Backend",
  "backend",
  "Frontend",
  "frontend",
  "NestJs",
  "Web",
  "web",
  "Style",
  "style",
  "Estilo",
  "estilo",
  "Fullstack",
  "fullstack",
];

export const makeHighlightText: (
  text: string,
  highlightClassName?: string,
  textClassName?: string
) => JSX.Element = (
  text = " ",
  highlightClassName = "text-yellow fw-bolder",
  textClassName = "text-gray-400"
) => {
  return (
    <>
      {text.split(" ").map((word, i) => {
        const key = `${i}`;
        let wordWithPontuation;

        if (word.includes(",")) {
          wordWithPontuation = word.split(",");
          return (
            <span key={key}>
              <span
                className={
                  keyWords.includes(wordWithPontuation[0])
                    ? highlightClassName
                    : textClassName
                }
              >
                {wordWithPontuation[0]}
              </span>
              ,{" "}
            </span>
          );
        }
        if (word.includes(".")) {
          wordWithPontuation = word.split(".");
          return (
            <span key={key}>
              <span
                className={
                  keyWords.includes(wordWithPontuation[0])
                    ? highlightClassName
                    : textClassName
                }
              >
                {wordWithPontuation[0]}
              </span>
              .{" "}
            </span>
          );
        }
        return (
          <span
            key={key}
            className={
              keyWords.includes(word) ? highlightClassName : textClassName
            }
          >
            {word}{" "}
          </span>
        );
      })}
    </>
  );
};

export default keyWords;
