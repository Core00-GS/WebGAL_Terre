import React, {ReactNode, useEffect, useRef} from "react";
import s from './topbarTab.module.scss';
import styles from '../topbar.module.scss';
import {eventBus} from "@/utils/eventBus";
import {useSelector} from "react-redux";
import {RootState} from "@/store/origineStore";
import {TopbarTabs} from "@/store/statusReducer";

export default function TopbarTab(props:{children:ReactNode}){

  const topbarTag = useRef<HTMLDivElement>(null);
  const currentTopbarTab = useSelector((state: RootState) => state.status.editor.currentTopbarTab);

  const isAddSentenceActive = currentTopbarTab === TopbarTabs.AddSentence;

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    const deltaY = event.deltaY;
    // console.log(`滚动距离：${deltaY}px`);
    const element = topbarTag.current;
    if(element){
      const x = element.scrollLeft;
      const toX = x + deltaY;
      element.scrollTo(toX,0);
    }
  };

  const handleToEnd = ()=>{
    const element = topbarTag.current;
    if(element){
      setTimeout(()=>element.scrollTo(10000000,0),100);
    }
  };

  useEffect(() => {
    eventBus.on('scrollTopbarToEnd',handleToEnd);
    return ()=>{
      eventBus.off('scrollTopbarToEnd',handleToEnd);
    };
  }, []);

  return <div className={s.tab+' '+(isAddSentenceActive?styles.topbar_btn_special_active_topbar_tags:'')} ref={topbarTag} onWheel={handleScroll}>{props.children}</div>;
}
