import { CoursePart } from './types';

const Part = ({ part }: { part: CoursePart }) => {
  let partJSX;
  switch (part.kind) {
    case 'basic': {
      partJSX = (
        <p>
          Name: {part.name} Exercise Count: {part.exerciseCount} Description:{' '}
          {part.description}
        </p>
      );
      break;
    }
    case 'background': {
      return (
        <p>
          Name: {part.name} Exercise Count: {part.exerciseCount} Description:
          {part.description} Background:{part.backgroundMaterial}
        </p>
      );
    }
    case 'group': {
      return (
        <p>
          Name: {part.name} Exercise Count: {part.exerciseCount} Group Count:{' '}
          {part.groupProjectCount}
        </p>
      );
    }
    case 'special': {
      partJSX = (
        <p>
          Name: {part.name} Exercise Count: {part.exerciseCount} Description:{' '}
          {part.description} Requirements: {part.requirements.toString()}
        </p>
      );
      break;
    }
    default: {
      return assertNever(part);
    }
  }
  return partJSX;
};

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

export { Part };
