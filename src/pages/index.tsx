import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "@/components/Modal";
import Image from "next/image";
import { iconsData } from "@/data/icons.data";
import { teamsData } from "@/data/teams.data";
import { scheduleData } from "@/data/schedule.data";

export default function Home() {
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
  const [selectedSchedule, setSelectedSchedule] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0d5b7] to-[#58a8aa] text-[#000000] flex flex-col">
      {/* Cabecera - Logo */}
      <motion.header
        className="p-8 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-40 h-40 relative">
          <Image
            src="/logo.svg"
            alt="Love & Hockey Logo"
            fill
            className="object-contain"
          />
        </div>
      </motion.header>

      {/* Contenido Principal */}
      <main className="p-8 space-y-16 mx-auto flex-grow">
        {/* Sección de Equipos */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h1 className="text-center text-3xl mb-8">Equipos y Capitanes</h1>
          <div className="grid grid-cols-4 md:gap-6 gap-4 justify-items-center">
            {teamsData.map((team, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedTeam(index)}
                className="w-17 h-17 md:w-30 md:h-30 relative cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-200 rounded-full overflow-hidden"
                style={{ backgroundColor: team.team_color }}
              >
                <Image
                  src={team.src || "/default_image.png"}
                  alt={`Equipo ${index + 1}`}
                  fill
                  className="rounded-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
        {/* Calendario */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h1 className="text-center text-3xl mb-8">Calendario</h1>

          {/* ――― Time-line ――― */}
          <div className="relative max-w-2xl mx-auto px-4 sm:px-6">
            {/* Línea vertical SOLO en ≥ md */}
            <span className="hidden md:block absolute left-5 top-0 bottom-0 w-px bg-neutral-400/50 pointer-events-none" />

            <ul className="space-y-8 sm:space-y-10 pl-0 md:pl-14">
              {scheduleData.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedSchedule(index)}
                  className="flex gap-4 sm:gap-6 items-start cursor-pointer group focus:outline-none"
                  role="button"
                  tabIndex={0}
                >
                  {/* Punto + ping */}
                  <span className="relative flex h-4 w-4 mt-0.5 flex-none">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#000]/60 opacity-60 group-hover:opacity-0" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-[#000]" />
                  </span>

                  {/* Hora  */}
                  <time className="text-right font-semibold flex-none w-14 sm:w-20">
                    {item.time}
                  </time>

                  {/* Contenido */}
                  <div className="min-w-0">
                    <h3 className="font-bold leading-tight">{item.title}</h3>
                    {item.subtitle && (
                      <p className="text-sm text-neutral-700 leading-snug break-words">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="text-center p-4">
        <p>
          created by{" "}
          <a
            href="https://piarconcept.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600"
          >
            Piar Concept
          </a>
        </p>
      </footer>
      <AnimatePresence>
        {selectedSchedule !== null && (
          <Modal onClose={() => setSelectedSchedule(null)}>
            <div className="space-y-4">
              <h2 className="text-2xl mb-2">{scheduleData[selectedSchedule].title}</h2>
              <p className="text-sm text-gray-600">{scheduleData[selectedSchedule].time}</p>
              {scheduleData[selectedSchedule].description ? (
                <p>{scheduleData[selectedSchedule].description}</p>
              ) : (
                <p>Pronto publicaremos los detalles de esta actividad.</p>
              )}
            </div>
          </Modal>
        )}
      </AnimatePresence>

      {/* Modal para Equipos */}
      <AnimatePresence>
        {selectedTeam !== null && (
          <Modal onClose={() => setSelectedTeam(null)}>
            <div className="space-y-4">
              <h2 className="text-2xl mb-4">
                {teamsData[selectedTeam].capitan
                  ? `Equipo de ${teamsData[selectedTeam].capitan}`
                  : `Equipo ${selectedTeam + 1} (Por revelar)`}
              </h2>
              {teamsData[selectedTeam].capitan ? (
                <div>
                  <h3 className="font-bold">Miembros:</h3>
                  <ul className="list-disc ml-5">
                    {teamsData[selectedTeam].members.map((member, i) => (
                      <li key={i}>{member}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>El capitán y el equipo aún no han sido revelados.</p>
              )}
              {teamsData[selectedTeam].revelationDate && (
                <p className="text-sm text-gray-500">
                  Revelado el: {teamsData[selectedTeam].revelationDate}
                </p>
              )}
            </div>
          </Modal>
        )}
      </AnimatePresence>

      {/* Modal para Invitados Especiales */}
      <AnimatePresence>
        {selectedIcon !== null && (
          <Modal onClose={() => setSelectedIcon(null)}>
            <div className="space-y-4">
              <h2 className="text-2xl mb-4">
                {iconsData[selectedIcon].name
                  ? iconsData[selectedIcon].name
                  : `Invitado Especial ${selectedIcon + 1} (Por revelar)`}
              </h2>
              {iconsData[selectedIcon].description ? (
                <p>{iconsData[selectedIcon].description}</p>
              ) : (
                <p>Detalles del invitado aún no han sido revelados.</p>
              )}
              {iconsData[selectedIcon].revelationDate && (
                <p className="text-sm text-gray-500">
                  Revelado el: {iconsData[selectedIcon].revelationDate}
                </p>
              )}
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}