import { ApiProperty } from '@nestjs/swagger';

export class PageResult {
  constructor(
    public data: any,
    public page: Page,
  ) {}
}

export class Page {
  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  totalRecords: number;
}
