export default function CardSlash({ width = 1.5, className, alt }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      alt={alt}
    >
      <path
        d="M2 8.5H15.24"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 16.5H7.29"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 16.5H14.5"
        strokeWidth={width}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.97998 20.5001H17.56C21.12 20.5001 22 19.6201 22 16.1101V6.89014"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.99 3.75C19.37 3.57 18.57 3.5 17.56 3.5H6.44C2.89 3.5 2 4.38 2 7.89V16.1C2 18.44 2.39 19.61 3.71 20.13"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2L2 22"
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
