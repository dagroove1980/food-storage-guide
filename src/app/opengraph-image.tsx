import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'FoodStorageGuide — Fridge, Freezer & Pantry Storage Times';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #f97316 0%, #fb923c 35%, #fed7aa 70%, #fef3c7 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        background: 'rgba(255,255,255,0.35)',
                        padding: '56px 80px',
                        borderRadius: 32,
                        border: '1px solid rgba(255,255,255,0.55)',
                        boxShadow: '0 24px 48px rgba(0,0,0,0.12)',
                    }}
                >
                    <div style={{ fontSize: 56, marginBottom: 16, letterSpacing: 8, display: 'flex' }}>
                        🥩🧊🥫
                    </div>
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 900,
                            color: '#7c2d12',
                            letterSpacing: '-0.03em',
                            lineHeight: 1,
                            textAlign: 'center',
                            display: 'flex',
                        }}
                    >
                        FoodStorageGuide
                    </div>
                    <div
                        style={{
                            fontSize: 26,
                            fontWeight: 600,
                            color: '#431407',
                            marginTop: 20,
                            background: 'rgba(255,255,255,0.5)',
                            padding: '10px 24px',
                            borderRadius: 9999,
                            display: 'flex',
                        }}
                    >
                        Fridge, Freezer & Pantry Storage Times
                    </div>
                    <div
                        style={{
                            fontSize: 20,
                            color: '#7c2d12',
                            marginTop: 12,
                            opacity: 0.8,
                            display: 'flex',
                        }}
                    >
                        174+ foods — stop guessing, start storing safely
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
