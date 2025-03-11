interface Props {
  className?: string;
}

export const TaskIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.27 7.796l-3.61 1.876-4.392 2.236a.548.548 0 01-.536 0L7.341 9.672 3.73 7.796a.594.594 0 010-1.06l8.014-3.925a.571.571 0 01.512 0l8.014 3.925a.594.594 0 010 1.06z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.34 9.672l-3.61 1.723a.594.594 0 000 1.06l3.61 1.876 4.392 2.236a.547.547 0 00.536 0l4.391-2.236 3.611-1.875a.594.594 0 000-1.014l-3.61-1.77"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.34 14.33l-3.61 1.725a.594.594 0 000 1.06l8.002 4.065a.547.547 0 00.536 0l8.002-4.065a.594.594 0 000-1.014l-3.61-1.77"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
