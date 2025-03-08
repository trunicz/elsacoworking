import { ID } from "appwrite";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import { useEffect, useState, useRef } from "react";

export default function Calendar() {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#cccccc");
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [events, setEvents] = useState<any[]>([]);
  const [eventToDelete, setEventToDelete] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const createEvent = (eventInfo: any) => {
    if (selectedEvent) {
      const newEvent = {
        id: ID.unique(),
        title: eventInfo.title,
        start: selectedEvent.start,
        end: selectedEvent.end,
        backgroundColor: eventInfo.color,
        borderColor: eventInfo.color,
        allDay: true,
      };
      setEvents((prevEvents: any) => [...prevEvents, newEvent]);
      setSelectedEvent(null);
      setTitle("");
      setColor("#cccccc");
    }
  };

  const handleSelect = (selectInfo: any) => {
    setSelectedEvent(selectInfo);
  };

  const handleEventClick = (clickInfo: any) => {
    setEventToDelete(clickInfo.event.id);
    dialogRef.current?.showModal();
  };

  const deleteEvent = (eventId: string) => {
    setEventToDelete(eventId);
    dialogRef.current?.showModal();
  };

  const confirmDelete = () => {
    if (eventToDelete) {
      setEvents(prevEvents =>
        prevEvents.filter(event => event.id !== eventToDelete)
      );
      setEventToDelete(null);
    }
    dialogRef.current?.close();
  };

  const cancelDelete = () => {
    setEventToDelete(null);
    dialogRef.current?.close();
  };

  return (
    <div className="flex gap-8">
      <aside className="w-1/3">
        <div className="border border-gray-200 p-4">
          <h3 className="text-lg font-light mb-4 text-gray-800">
            Agregar Evento
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600">Título</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="mt-1 outline-none border p-2 block w-full border-gray-200 focus:border-gray-400 focus:ring-0 rounded-none"
              />
              <label className="block text-sm text-gray-600 mt-4">Color</label>
              <input
                type="color"
                name="color"
                value={color}
                onChange={e => setColor(e.target.value)}
                className="mt-1 outline-none border-none block w-full h-10 border-gray-200 focus:border-gray-400 focus:ring-0 rounded-none"
              />
            </div>
            <button
              type="button"
              className="w-full bg-gray-800 text-white py-2 px-4 hover:bg-gray-900 transition-colors"
              onClick={() => createEvent({ title, color })}
              disabled={!selectedEvent || !title}
            >
              Agregar Evento
            </button>
          </div>
        </div>

        <div className="border border-gray-200 p-4 mt-4">
          <h3 className="text-lg font-light mb-4 text-gray-800">
            Eventos del Mes
          </h3>
          <div className="space-y-2">
            {events
              .filter(event => event.start.getMonth() === new Date().getMonth())
              .map(event => (
                <div
                  key={event.id}
                  className="flex items-center justify-between p-2 border-b border-gray-100"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: event.backgroundColor }}
                    />
                    <span>{event.title}</span>
                  </div>
                  <button
                    onClick={() => deleteEvent(event.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            {events.length === 0 && (
              <p className="text-gray-500 text-sm">
                No hay eventos programados
              </p>
            )}
          </div>
        </div>
      </aside>
      <div className="flex-1">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          events={events}
          locale={esLocale}
          titleFormat={{
            year: "numeric",
            month: "short",
          }}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,dayGridWeek,dayGridDay",
          }}
          initialView="dayGridMonth"
          selectable
          select={handleSelect}
          eventClick={handleEventClick}
          editable={true}
        />
      </div>

      <dialog ref={dialogRef} className="p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-medium mb-4">Confirmar eliminación</h3>
        <p className="mb-6">
          ¿Estás seguro de que deseas eliminar este evento?
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={cancelDelete}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancelar
          </button>
          <button
            onClick={confirmDelete}
            className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded"
          >
            Eliminar
          </button>
        </div>
      </dialog>
    </div>
  );
}
