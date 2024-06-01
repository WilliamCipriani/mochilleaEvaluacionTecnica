import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { isValidObjectId, Types } from 'mongoose';

@Injectable()
export class ParseObjectIdPipe implements PipeTransform<string> {
  transform(value: string, metadata: ArgumentMetadata): Types.ObjectId {
    if (!isValidObjectId(value)) {
      throw new BadRequestException(`Invalid ObjectId: ${value}`);
    }
    return new Types.ObjectId(value);
  }
}
