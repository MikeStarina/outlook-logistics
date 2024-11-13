import { ImageResponse } from 'next/og'
 

 
// Image metadata
export const alt = 'OUTLOOK LOGISTICS | Главная'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  // Font
  // const font = fetch(
  //  new URL('', import.meta.url)
  // ).then((res) => res.arrayBuffer())
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 40,
          background: '#1976d2',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#f1f1f1'
        }}
      >
        OUTLOOK LOGISTICS | Главная
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}