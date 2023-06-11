import { ListProjectCardsDTO } from '../dtos/ListProjectCards.dto';

export class ProjectCardToListEntity implements ListProjectCardsDTO {
  id: string;
  cover_image: string;
  galery_images: string[];
  name: string;
  slug: string;
  summary_description: string;
  description: string;
  project_url: string;
  behance_url: string;
  category: string;
  applied_technologies: string[];
  functionalities: string[];
  is_selected: boolean;
  project_section_id: string;
}
