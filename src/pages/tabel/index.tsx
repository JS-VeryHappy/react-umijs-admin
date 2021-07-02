import TabelCustom from '@/components/TabelCustom';
import { columns } from './define';
import { getProTable } from '@/services';

function tabel() {
  return <TabelCustom<any> rowKey="id" request={getProTable} columns={columns} />;
}

export default tabel;
