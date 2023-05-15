export class CreateFormRegisterDTO {
  id?: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  project_description: string;
  are_terms_accepted: boolean;
  form_section_id: string;
}
