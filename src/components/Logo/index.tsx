import { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement>{

}
export function Logo(props:LogoProps) {
  return (
    <svg
      width={105}
      height={94}
      viewBox="0 0 105 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M105 46.833c0-6.956-8.71-13.548-22.066-17.636 3.082-13.611 1.712-24.441-4.323-27.908C77.22.475 75.593.09 73.817.09v4.773c.984 0 1.776.193 2.44.556 2.91 1.67 4.173 8.026 3.189 16.202-.236 2.012-.621 4.13-1.092 6.292-4.195-1.027-8.775-1.819-13.59-2.333-2.89-3.959-5.886-7.555-8.904-10.7C62.837 8.393 69.386 4.841 73.838 4.841V.069c-5.885 0-13.59 4.195-21.38 11.471C44.666 4.306 36.961.154 31.075.154v4.773c4.43 0 11.001 3.532 17.978 9.974a101.11 101.11 0 00-8.839 10.68c-4.837.513-9.417 1.305-13.612 2.354a64.58 64.58 0 01-1.113-6.207c-1.006-8.176.236-14.532 3.125-16.223.642-.385 1.477-.556 2.461-.556V.176c-1.798 0-3.424.385-4.837 1.198-6.014 3.468-7.362 14.276-4.259 27.845C8.668 33.329 0 39.899 0 46.833c0 6.956 8.71 13.548 22.066 17.636-3.082 13.611-1.712 24.441 4.323 27.908 1.391.814 3.018 1.199 4.816 1.199 5.885 0 13.59-4.195 21.38-11.472 7.791 7.234 15.496 11.386 21.382 11.386 1.797 0 3.424-.385 4.837-1.198 6.014-3.468 7.362-14.276 4.259-27.845C96.332 60.36 105 53.767 105 46.833zM77.134 32.558c-.792 2.76-1.776 5.607-2.89 8.453a101.299 101.299 0 00-2.803-5.136 115.874 115.874 0 00-3.082-5.008 96.55 96.55 0 018.775 1.69zM67.332 55.35c-1.67 2.89-3.382 5.629-5.158 8.176-3.19.278-6.42.428-9.674.428-3.232 0-6.464-.15-9.631-.407a117.954 117.954 0 01-5.18-8.133 111.458 111.458 0 01-4.451-8.518 111.566 111.566 0 014.43-8.54c1.67-2.889 3.382-5.628 5.158-8.175 3.19-.278 6.42-.428 9.674-.428 3.232 0 6.464.15 9.631.406a117.954 117.954 0 015.18 8.133 111.441 111.441 0 014.451 8.519 119.804 119.804 0 01-4.43 8.54zm6.913-2.782a91.731 91.731 0 012.953 8.518 96.03 96.03 0 01-8.817 1.712 118.247 118.247 0 003.082-5.072 121.584 121.584 0 002.782-5.158zM52.543 75.405a88.265 88.265 0 01-5.95-6.849c1.926.086 3.895.15 5.886.15 2.011 0 4.002-.043 5.95-.15a83.567 83.567 0 01-5.886 6.85zM36.619 62.8a96.55 96.55 0 01-8.774-1.69c.791-2.762 1.776-5.608 2.889-8.455a101.299 101.299 0 002.803 5.137 141.762 141.762 0 003.082 5.008zm15.817-44.538a88.248 88.248 0 015.95 6.849c-1.927-.086-3.896-.15-5.886-.15-2.012 0-4.002.043-5.95.15a83.552 83.552 0 015.886-6.85zM36.598 30.867a118.25 118.25 0 00-5.864 10.209 91.731 91.731 0 01-2.954-8.518 103.91 103.91 0 018.818-1.691zm-19.37 26.796c-7.576-3.232-12.477-7.47-12.477-10.83 0-3.36 4.901-7.62 12.478-10.83 1.84-.791 3.852-1.498 5.928-2.161 1.22 4.195 2.826 8.56 4.816 13.034-1.97 4.452-3.553 8.796-4.751 12.97a65.043 65.043 0 01-5.993-2.183zm11.515 30.584c-2.91-1.67-4.173-8.026-3.189-16.202.236-2.012.621-4.13 1.092-6.292 4.195 1.027 8.775 1.819 13.59 2.332 2.89 3.96 5.886 7.556 8.904 10.702-6.977 6.485-13.526 10.037-17.978 10.037-.963-.021-1.777-.214-2.419-.578zm50.767-16.31c1.006 8.177-.236 14.533-3.125 16.224-.642.385-1.477.556-2.461.556-4.43 0-11.001-3.531-17.978-9.973a101.11 101.11 0 008.839-10.68c4.837-.514 9.417-1.305 13.612-2.354.492 2.162.877 4.238 1.113 6.228zm8.24-14.274c-1.84.791-3.853 1.498-5.929 2.161-1.22-4.195-2.825-8.56-4.815-13.034 1.969-4.451 3.552-8.796 4.751-12.97a67.878 67.878 0 016.014 2.183c7.576 3.232 12.478 7.47 12.478 10.83-.022 3.36-4.923 7.62-12.5 10.83z"
        fill="#81D8F7"
      />
      <path
        d="M52.479 56.614c5.401 0 9.78-4.38 9.78-9.781 0-5.402-4.379-9.78-9.78-9.78-5.402 0-9.781 4.378-9.781 9.78 0 5.402 4.379 9.78 9.78 9.78z"
        fill="#81D8F7"
      />
    </svg>
  )
}

export default Logo