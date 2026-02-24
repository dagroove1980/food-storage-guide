import { ImageResponse } from 'next/og';
import { getAllFoods, getFoodById } from '@/lib/data';

export const runtime = 'edge';
export const alt = 'Food storage times';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export async function generateStaticParams() {
    return getAllFoods().map((food) => ({ id: food.id }));
}

export default async function OGImage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const food = getFoodById(id);

    if (!food) {
        return new ImageResponse(
            (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, #f97316 0%, #fed7aa 100%)',
                        fontSize: 48,
                        fontWeight: 700,
                        color: '#7c2d12',
                        fontFamily: 'sans-serif',
                    }}
                >
                    FoodStorageGuide
                </div>
            ),
            size
        );
    }

    const fridgeDuration = food.storage.fridge?.[0]?.duration ?? null;
    const freezerDuration = food.storage.freezer?.[0]?.duration ?? null;
    const pantryDuration = food.storage.pantry?.[0]?.duration ?? null;
    const categoryLabel = food.category.charAt(0).toUpperCase() + food.category.slice(1);

    const badges = [
        fridgeDuration && { label: 'Fridge', value: fridgeDuration },
        freezerDuration && { label: 'Freezer', value: freezerDuration },
        pantryDuration && { label: 'Pantry', value: pantryDuration },
    ].filter(Boolean) as { label: string; value: string }[];

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 50%, #fef3c7 100%)',
                    padding: 60,
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
                        <div
                            style={{
                                backgroundColor: '#f97316',
                                color: '#fff',
                                padding: '8px 20px',
                                borderRadius: 9999,
                                fontSize: 20,
                                fontWeight: 600,
                                display: 'flex',
                            }}
                        >
                            {categoryLabel}
                        </div>
                    </div>
                    <div
                        style={{
                            fontSize: 68,
                            fontWeight: 800,
                            color: '#431407',
                            lineHeight: 1.1,
                            maxWidth: 860,
                            letterSpacing: '-0.02em',
                            display: 'flex',
                        }}
                    >
                        {food.name}
                    </div>
                    <div style={{ display: 'flex', gap: 16, marginTop: 28 }}>
                        {badges.map((badge) => (
                            <div
                                key={badge.label}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    background: 'rgba(255,255,255,0.7)',
                                    border: '1px solid rgba(249,115,22,0.3)',
                                    borderRadius: 16,
                                    padding: '12px 24px',
                                    alignItems: 'center',
                                }}
                            >
                                <div style={{ fontSize: 15, color: '#9a3412', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, display: 'flex' }}>
                                    {badge.label}
                                </div>
                                <div style={{ fontSize: 24, fontWeight: 700, color: '#431407', display: 'flex' }}>
                                    {badge.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: '#f97316', display: 'flex' }} />
                    <div style={{ fontSize: 22, fontWeight: 700, color: '#7c2d12', display: 'flex' }}>
                        food-storage-guide.com
                    </div>
                </div>
            </div>
        ),
        size
    );
}
