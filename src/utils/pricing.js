/**
 * Progressive Slab Pricing Calculator
 *
 * Rules:
 * - First 20 flats: ₹15 per flat
 * - Flats 21–50: ₹12 per additional flat
 * - Flats 51–100: ₹10 per additional flat
 * - Flats 101+: ₹8 per additional flat
 */

export const PRICING_SLABS = [
  { range: '1–20 flats', rate: 15, label: 'First 20 flats' },
  { range: '21–50 flats', rate: 12, label: 'Flats 21–50' },
  { range: '51–100 flats', rate: 10, label: 'Flats 51–100' },
  { range: '101+ flats', rate: 8, label: 'Flats 101+' },
];

export function calculateProgressivePrice(flats = 0) {
  const count = Math.max(0, Math.floor(Number(flats) || 0));

  const s1 = Math.min(count, 20);
  const s2 = Math.min(Math.max(count - 20, 0), 30);
  const s3 = Math.min(Math.max(count - 50, 0), 50);
  const s4 = Math.max(count - 100, 0);

  const slab1Amount = s1 * 15;
  const slab2Amount = s2 * 12;
  const slab3Amount = s3 * 10;
  const slab4Amount = s4 * 8;

  const total = slab1Amount + slab2Amount + slab3Amount + slab4Amount;

  const slabs = [];
  if (s1 > 0) slabs.push({ label: 'First 20 flats', quantity: s1, rate: 15, amount: slab1Amount });
  if (s2 > 0) slabs.push({ label: 'Flats 21–50', quantity: s2, rate: 12, amount: slab2Amount });
  if (s3 > 0) slabs.push({ label: 'Flats 51–100', quantity: s3, rate: 10, amount: slab3Amount });
  if (s4 > 0) slabs.push({ label: 'Flats 101+', quantity: s4, rate: 8, amount: slab4Amount });

  return {
    flats: count,
    total,
    slabs,
    perFlatRate: count > 0 ? (total / count).toFixed(2) : '0.00',
  };
}
