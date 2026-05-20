export type EditorialImageAsset = {
  src: string
  position?: string
  fit?: 'cover' | 'contain'
}

export const editorialImages = {
  strategyHandshake: {
    src: 'https://images.pexels.com/photos/8112162/pexels-photo-8112162.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-8112162.jpg&fm=jpg',
    position: 'center center',
  },
  advisoryRoundtable: {
    src: 'https://images.pexels.com/photos/34221317/pexels-photo-34221317.png?cs=srgb&dl=pexels-luis-sevilla-252657-34221317.jpg&fm=jpg',
    position: 'center center',
  },
  farmerInField: {
    src: 'https://images.pexels.com/photos/11588042/pexels-photo-11588042.jpeg?cs=srgb&dl=pexels-safari-consoler-3290243-11588042.jpg&fm=jpg',
    position: 'center 44%',
  },
  indoorPlantLab: {
    src: 'https://images.pexels.com/photos/3912518/pexels-photo-3912518.jpeg?cs=srgb&dl=pexels-thisisengineering-3912518.jpg&fm=jpg',
    position: 'center 28%',
  },
  ruralCultivation: {
    src: 'https://images.pexels.com/photos/36674642/pexels-photo-36674642.jpeg?cs=srgb&dl=pexels-rufaro-36674642.jpg&fm=jpg',
    position: 'center 52%',
  },
  researchDesk: {
    src: 'https://images.pexels.com/photos/8036340/pexels-photo-8036340.jpeg?cs=srgb&dl=pexels-ron-lach-8036340.jpg&fm=jpg',
    position: 'center center',
  },
  documentReview: {
    src: 'https://images.pexels.com/photos/6814360/pexels-photo-6814360.jpeg?cs=srgb&dl=pexels-cottonbro-6814360.jpg&fm=jpg',
    position: 'center center',
  },
} satisfies Record<string, EditorialImageAsset>
