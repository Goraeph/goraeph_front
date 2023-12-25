import { HiHashtag } from '@react-icons/all-files/hi/HiHashtag';

import { Notes } from '@/data/data';

const NoteTitle = ({ id }: { id: number }) => {
  return (
    <>
      {Notes.map((note, index: number) => {
        if (id === note.id) {
          return (
            <span key={index}>
              <HiHashtag />
              {note.title}
            </span>
          );
        }
      })}
    </>
  );
};
export default NoteTitle;
