import { Empty, EmptyHeader, EmptyTitle, EmptyDescription } from '../ui/empty';

interface Props {
  title: string;
  description: string;
}

export function CollectionEmpty({ title, description }: Props) {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
