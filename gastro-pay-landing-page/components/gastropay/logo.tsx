'use client'

export function GastroPayLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cloche icon */}
      <path
        d="M8 28H28M10 28C10 28 10 18 18 14C18 13 18 12 18 12M18 14C26 18 26 28 26 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Steam */}
      <path
        d="M18 10C18 8.5 17 7 18 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Card */}
      <rect
        x="20"
        y="20"
        width="14"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Card chip */}
      <rect
        x="22"
        y="23"
        width="4"
        height="3"
        rx="0.5"
        stroke="currentColor"
        strokeWidth="1"
      />
      {/* NFC waves */}
      <path
        d="M36 22C38 22 40 24 40 26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M36 18C41 18 45 22 45 26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function GastroPayIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cloche icon */}
      <path
        d="M4 30H24M6 30C6 30 6 20 14 16C14 15 14 14 14 14M14 16C22 20 22 30 22 30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Steam */}
      <path
        d="M14 12C14 10.5 13 9 14 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Card */}
      <rect
        x="18"
        y="20"
        width="16"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Card chip */}
      <rect
        x="20"
        y="24"
        width="5"
        height="4"
        rx="0.5"
        stroke="currentColor"
        strokeWidth="1"
      />
      {/* NFC waves */}
      <path
        d="M36 23C38.5 23 41 25.5 41 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M36 18C41.5 18 46 22.5 46 28"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
