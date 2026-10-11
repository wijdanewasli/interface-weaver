import { createFileRoute,notFound } from '@tanstack/react-router';
import { SectionPage } from '@/features/edutek/section';
import { isRole,sectionTitles,pageHead,type Section } from '@/features/edutek/domain';
export const Route=createFileRoute('/$role/$section')({beforeLoad:({params})=>{if(!Object.hasOwn(sectionTitles,params.section))throw notFound()},head:({params})=>pageHead(sectionTitles[params.section as Section]??'Espace pédagogique'),component:Page});
function Page(){const {role,section}=Route.useParams();return isRole(role)?<SectionPage role={role} section={section as Section}/>:null}
