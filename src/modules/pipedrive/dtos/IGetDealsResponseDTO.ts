export interface IDealData {
  id: string;
  title: string;
  value: number;
  person_id: {
    name: string;
  };
}

export interface IGetDealsResponseDTO {
  success: boolean;
  data: IDealData[];
}
