import InvoiceNumbersList from 'components/InvoiceNumbersList/InvoiceNumbersList';
import { useSelector } from 'react-redux';
import { selectInvoicesNumberList } from 'redux/selectors';

const { SideBarWrap } = require('./SideBar.styled');

const SideBar = () => {
  const invoicesList = useSelector(selectInvoicesNumberList);

  return (
    <SideBarWrap>
      {invoicesList && <InvoiceNumbersList list={invoicesList} />}
    </SideBarWrap>
  );
};

export default SideBar;
