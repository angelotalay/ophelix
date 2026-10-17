const heroSectionFragment = `
{
      "title": hero->title,
      "text": hero->heroText,
      "heroNavigation1": hero->heroNavigation1,
      "heroNavigation2": hero->heroNavigation2,
      "muxVideo": hero->muxVideo {
        "playbackId":asset->playbackId,
      },
      "heroImage": hero->heroImage,
      alignment, 
      subTextAlignment,
    }` as const;

export default heroSectionFragment;
