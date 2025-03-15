import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';

type SubItem = {
  title: string;
  name?: string[];
};

type TriggerContent = {
  name?: string;
  price?: string;
  subItems?: SubItem[];
  note?: string;
};

type AccordionItem = {
  desc: string;
  list: Array<{
    mode?: 'assort' | 'single';
    trigger: string;
    triggerContent: TriggerContent[];
  }>;
};

type Props = {
  accordionList: AccordionItem[];
};

const MenuAccordion = ({ accordionList }: Props) => {
  return (
    <>
      {accordionList.map((item, index) => (
        <div key={index} className="mb-6">
          <p className="mb-4 lg:w-[600px]">{item.desc}</p>
          <div className="flex gap-6 w-[1100px]">
            <div className="flex flex-col gap-2">
              <Image
                src="/beef-potato.jpeg"
                alt="beefのスライスとポテト"
                width={300}
                height={300}
                className="object-cover w-[320px] h-[320px] rounded-full"
              />
              <div className="w-[320px] h-[320px]">
                {/* <Image
                  src="/beef-potato.jpeg"
                  alt="beefのスライスとポテト"
                  width={300}
                  height={300}
                  className="object-cover w-[320px] h-[320px] rounded-full"
                /> */}
              </div>
            </div>
            <Accordion
              type="single"
              collapsible
              className="w-[460px] h-[645px] overflow-auto px-6 py-2 border border-[#747474] border-l-4 border-l-red-500"
            >
              {item.list.map((listItem, listIndex) => (
                <AccordionItem key={listIndex} value={`item-${listIndex}`}>
                  <AccordionTrigger>{listItem.trigger}</AccordionTrigger>
                  <AccordionContent>
                    {listItem.mode === 'single' &&
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
                            <span className="whitespace-pre-line flex-1 font-bold text-[110%] border-l-2 pl-2 mb-2">
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
            <div className="flex flex-col gap-2">
              <div className="w-[320px] h-[320px]">
                {/* <Image
                  src="/shrink.png"
                  alt="エビフライの盛り合わせ"
                  width={300}
                  height={300}
                  className="object-cover w-[320px] h-[320px] rounded-full"
                /> */}
              </div>
              <Image
                src="/shrink.png"
                alt="エビフライの盛り合わせ"
                width={300}
                height={300}
                className="object-cover w-[320px] h-[320px] rounded-full"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuAccordion;
