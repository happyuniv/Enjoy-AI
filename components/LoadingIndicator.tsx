export default function LoadingIndicator() {
  return (
    <>
      <div className='spinner'></div>
      <style jsx>
        {`
          .spinner {
            width: 50px;
            height: 50px;
            border: 3px solid white;
            border-radius: 50%;
            border-top-color: var(--theme);
            animation: spin 1s ease-in-out infinite;
          }
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </>
  )
}
