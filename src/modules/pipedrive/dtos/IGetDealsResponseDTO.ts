interface IDealData {
  id: string;
  won_time: string;
  title: string;
  value: number;
  person_id: {
    name: string;
  };
}

interface IGetDealsResponseDTO {
  success: boolean;
  data: IDealData[];
}

export { IDealData, IGetDealsResponseDTO };
