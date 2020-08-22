import React from "react";
import { AnswerObject } from "../../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";
type QuestionProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<QuestionProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <Wrapper>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    {answers.map((aa) => {
      return (
        <ButtonWrapper
          key={aa}
          correct={userAnswer?.correctAnswer === aa}
          userClicked={userAnswer?.answer === aa}
        >
          {/* if(userAnswer is Object => convert to boolean) */}
          <button disabled={!!userAnswer} value={aa} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: aa }} />
          </button>
        </ButtonWrapper>
      );
    })}
  </Wrapper>
);

export default QuestionCard;
