import { createFileRoute,useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { GraduationCap,ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEduTek } from '@/features/edutek/store';
import { roleNames,pageHead,type Role } from '@/features/edutek/domain';
export const Route=createFileRoute('/connexion')({head:()=>pageHead('Accès aux espaces pédagogiques'),component:Connection});
function Connection(){const s=useEduTek();const navigate=useNavigate();const [role,setRole]=useState<Role>('enseignant');return <main className="grid min-h-screen place-items-center bg-muted px-5"><div className="w-full max-w-md py-12"><GraduationCap size={48} className="mb-5 text-primary"/><h1 className="text-4xl font-semibold">EduTek<span className="text-primary">.</span></h1><p className="mb-9 mt-3 text-muted-foreground">Votre espace pédagogique</p><form className="space-y-5" onSubmit={e=>{e.preventDefault();s.setRole(role);navigate({to:'/$role',params:{role}})}}><label className="grid gap-2 text-sm">Espace<select aria-label="Espace de connexion" value={role} onChange={e=>setRole(e.target.value as Role)} className="h-11 rounded-md border bg-card px-3">{Object.entries(roleNames).map(([v,l])=><option key={v} value={v}>{l}</option>)}</select></label><Button className="w-full" type="submit">Ouvrir l’espace<ArrowUpRight/></Button></form><p className="mt-6 text-center text-xs text-muted-foreground">Données de démonstration · Accès sans compte</p></div></main>}
