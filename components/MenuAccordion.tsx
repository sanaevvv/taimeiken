import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import Image from 'next/image';

export type SubItem = {
  title: string;
  name?: string[];
};

export type TriggerContent = {
  name?: string;
  price?: string;
  subItems?: SubItem[];
  note?: string;
};

export type MenuItem = {
  trigger: string;
  triggerContent: TriggerContent[];
  mode?: 'assort' | 'single';
};

export type AccordionList = {
  desc: string;
  list: MenuItem[];
};

// MenuAccordion.tsx
type Props = {
  desc: string;
  list: MenuItem[];
};

const MenuAccordion = ({ desc, list }: Props) => {
  return (
    <>
      <div className="mb-6 max-w-[1200px] mx-auto">
        <p className="my-4 sm:w-[600px] text-justify">{desc}</p>

        <div className="md:flex md:gap-8 justify-center items-center">
          <div className="hidden lg:flex flex-col gap-6 w-[400px] justify-center">
            <div className="overflow-hidden rounded-[10px]">
              {' '}
              <Image
                src="/beef-potato.jpeg"
                alt="beefのスライスとポテト"
                width={350}
                height={300}
                className="scale-[1.5] object-cover aspect-[4/3]"
              />
            </div>

            <div className="overflow-hidden rounded-[10px]">
              <Image
                src="/beef.jpeg"
                alt="beefのスライスとポテト"
                width={350}
                height={300}
                className="scale-[1.5] object-cover aspect-[4/3]"
              />
            </div>
          </div>
          <Accordion
            type="single"
            collapsible
            className="max-w-[450px] w-full h-[510px] overflow-y-auto px-8 py-2 border-2 border-[#747474] mx-auto"
          >
            {list.map((listItem, listIndex) => (
              <AccordionItem key={listIndex} value={`item-${listIndex}`}>
                <AccordionTrigger className="text-lg font-bold">
                  {listItem.trigger}
                </AccordionTrigger>
                <AccordionContent>
                  {(!listItem.mode || listItem.mode === 'single') &&
                    listItem.triggerContent.map((content, contentIndex) => (
                      <dd key={contentIndex} className="py-1">
                        <div className="flex justify-between">
                          <span className="whitespace-pre-line flex-1">
                            {content.name}
                          </span>
                          <span className="inline-block w-16 text-right">
                            {content.price}
                          </span>
                        </div>
                        <small>{content.note && content.note}</small>
                      </dd>
                    ))}
                  {listItem.mode === 'assort' &&
                    listItem.triggerContent.map((content, contentIndex) => (
                      <dd key={contentIndex} className="py-1">
                        <div className="flex justify-between mb-2">
                          <span className="whitespace-pre-line flex-1 font-bold text-[120%] border-l-2 pl-2 mb-2">
                            {content.name}
                          </span>
                          <span className="inline-block w-16 text-right">
                            {content.price}
                          </span>
                        </div>
                        {content.subItems?.map((subItem, subIndex) => (
                          <div key={subIndex} className="mb-4">
                            <h4 className="mb-2">{subItem.title}</h4>
                            {subItem.name?.map((name, nameIndex) => (
                              <p key={nameIndex} className="ml-4 text-sm">
                                {name}
                              </p>
                            ))}
                          </div>
                        ))}
                        <small>{content.note && content.note}</small>
                      </dd>
                    ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="hidden md:flex flex-col  gap-6 w-[400px] justify-center items-center">
            <div className="overflow-hidden rounded-[10px]">
              <Image
                src="/shrink.png"
                alt="エビフライの盛り合わせ"
                width={350}
                height={300}
                className="scale-[1.3] object-cover aspect-[4/3]"
              />
            </div>
            <div className="overflow-hidden rounded-[10px]">
              <Image
                src="/omuraise.jpeg"
                alt="エビフライの盛り合わせ"
                width={350}
                height={300}
                className="aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuAccordion;
