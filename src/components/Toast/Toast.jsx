import toast from 'react-hot-toast';

const notifyERROR = text => toast.error(text);
const notifySUCCESS = text => toast.success(text);

export const Toast = { notifyERROR, notifySUCCESS };
