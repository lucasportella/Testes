// as is only for telling the type checker to treat something as a different type.

interface Titles {
    en: string;
    rj: string;
  }
  
  interface Descriptions {
    en: string;
  }
  
  interface LocationState {
    banner_image: string;
    cover_image: string;
    descriptions: Descriptions;
    titles: Titles;
  }

const location = useLocation()
const state = location.state as LocationState