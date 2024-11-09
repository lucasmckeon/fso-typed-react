import { Part } from './Part';
import { CoursePart } from './types';

const Content = ({ courseParts }: { courseParts: CoursePart[] }) => {
  return courseParts.map((part) => <Part part={part} />);
};

export { Content };
