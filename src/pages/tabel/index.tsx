import TabelCustom from '@/components/TabelCustom';
import { columns } from './define';
import { getProTable } from '@/services';

function tabel() {
  return (
    <TabelCustom<any>
      request={getProTable}
      columns={columns}
      headerTitleConfig={{
        create: () => {
          console.log(1);
        },
        import: () => {
          console.log(2);
        },
        export: () => {
          console.log(3);
        },
      }}
      selectionConfig={{
        delete: () => {
          console.log(1);
        },
        export: () => {
          console.log(3);
        },
      }}
      expandable={{
        expandedRowRender: (record: any) => <p>{record.title}</p>,
      }}
    />
  );
}

export default tabel;
