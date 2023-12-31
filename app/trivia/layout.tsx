export const metadata = {
  title: 'Playing Trivia',
  description: 'Generated by create next app',
}

export default function TriviaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        background:
          'linear-gradient(180deg, rgba(100,100,100,0.2) 0%, rgba(200,200,200,0.7) 50%, rgba(255,255,255,0.9) 100%)',
        minHeight: 'calc(100vh - 64px - 64px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {children}
    </div>
  )
}
