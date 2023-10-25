import { OmitType } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends OmitType(CreatePostDto, [
  'authorId',
] as const) {}
