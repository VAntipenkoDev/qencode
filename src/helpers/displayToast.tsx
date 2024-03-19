import { toast } from 'react-toastify';
import { TypeOptions } from 'react-toastify/dist/types';

type TDisplayToast = {
  type: TypeOptions;
  data: string[];
};

const displayToast = ({ data, type }: TDisplayToast) => {
  data.forEach((itemMessage) => toast(itemMessage, { type }));
};

export default displayToast;
