export type EditorialImageAsset = {
  src: string
  srcSet?: string
  sizes?: string
  position?: string
  fit?: 'cover' | 'contain'
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
}

function createPexelsLandscapeAsset(
  photoId: string,
  extension: 'jpeg' | 'jpg' | 'png',
  position?: string,
) {
  const base = `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.${extension}`

  return {
    src: `${base}?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200`,
    srcSet: [
      `${base}?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280 280w`,
      `${base}?auto=compress&cs=tinysrgb&h=350 560w`,
      `${base}?auto=compress&cs=tinysrgb&h=650&w=940 940w`,
      `${base}?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200 1200w`,
    ].join(', '),
    sizes: '(min-width: 1280px) 360px, (min-width: 768px) 45vw, 92vw',
    position,
  } satisfies EditorialImageAsset
}

export const editorialImages = {
  strategyHandshake: {
    ...createPexelsLandscapeAsset('8112162', 'jpeg', 'center center'),
    loading: 'eager',
    fetchPriority: 'high',
  },
  advisoryRoundtable: createPexelsLandscapeAsset('34221317', 'png', 'center center'),
  farmerInField: createPexelsLandscapeAsset('11588042', 'jpeg', 'center 44%'),
  indoorPlantLab: createPexelsLandscapeAsset('3912518', 'jpeg', 'center 28%'),
  ruralCultivation: createPexelsLandscapeAsset('36674642', 'jpeg', 'center 52%'),
  researchDesk: createPexelsLandscapeAsset('8036340', 'jpeg', 'center center'),
  documentReview: createPexelsLandscapeAsset('6814360', 'jpeg', 'center center'),
} satisfies Record<string, EditorialImageAsset>
