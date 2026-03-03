# 📋 Iconos Decorativos para Sandra Jordan - Process Section

## 🎯 Ubicación de los Iconos

Los iconos decorativos aparecerán al lado de cada título en la sección "Mi Proceso" de la página Sandra Jordan.

## 📁 Archivos Necesarios

Debes crear y colocar **3 archivos SVG** en la siguiente ruta:

```
/public/images/projects/sandra-jordan/
```

### 1️⃣ research.svg
**Ubicación**: `/public/images/projects/sandra-jordan/research.svg`
**Título asociado**: "Benchmark de Mercado Luxury"
**Sugerencia de diseño**: 
- Ícono de lupa 🔍
- Gráfico de análisis
- Símbolo de investigación
- Estilo minimalista, líneas elegantes

---

### 2️⃣ sitemap.svg
**Ubicación**: `/public/images/projects/sandra-jordan/sitemap.svg`
**Título asociado**: "Arquitectura de Información"
**Sugerencia de diseño**:
- Diagrama de flujo
- Árbol de sitio
- Estructura jerárquica
- Grid/cuadrícula organizada

---

### 3️⃣ ui-design.svg
**Ubicación**: `/public/images/projects/sandra-jordan/ui-design.svg`
**Título asociado**: "Diseño Visual Premium"
**Sugerencia de diseño**:
- Paleta de colores 🎨
- Ventana de diseño/artboard
- Cursor de diseñador
- Elementos visuales (cuadrados, círculos)

---

## 📐 Especificaciones Técnicas

- **Tamaño recomendado**: 64x64px - 128x128px
- **Formato**: SVG (vector)
- **Colores**: Usar el color cherry (#670626) o tonos neutros
- **Estilo**: Minimalista, elegante, líneas limpias
- **Grosor de línea**: 1.5px - 2px para mantener consistencia

---

## 🔄 Cómo Actualizar el Código

**IMPORTANTE**: Los iconos ya están integrados en el código actual.

El sistema usa el campo `image` de cada paso del proceso:

```javascript
process: [
  {
    phase: 'Research',
    title: 'Benchmark de Mercado Luxury',
    description: '...',
    image: '/images/projects/sandra-jordan/research.svg'  // ← Cambia esta ruta
  },
  {
    phase: 'Sitemap',
    title: 'Arquitectura de Información',
    description: '...',
    image: '/images/projects/sandra-jordan/sitemap.svg'  // ← Cambia esta ruta
  },
  {
    phase: 'UI Design',
    title: 'Diseño Visual Premium',
    description: '...',
    image: '/images/projects/sandra-jordan/ui-design.svg'  // ← Cambia esta ruta
  }
]
```

**Actualmente** estos campos apuntan a:
- `research.svg`
- `sitemap.svg`
- `ui-design.svg`

Solo necesitas **crear los archivos SVG** con esos nombres en la carpeta indicada.

---

## 👁️ Vista Previa Visual

Los iconos aparecerán así:

```
┌─────────────────────────────────────┐
│  [🔍]  Benchmark de Mercado Luxury  │
│                                     │
│  Análisis de e-commerce de         │
│  marcas de lujo...                 │
└─────────────────────────────────────┘
```

El ícono estará:
- ✅ Dentro de un círculo con fondo suave
- ✅ A la izquierda del título
- ✅ Con opacidad del 70%
- ✅ Tamaño responsive (48px móvil, 64px desktop)

---

## 🎨 Alternativa Temporal

Si aún no tienes los iconos, puedes usar **iconos de una biblioteca** como:

### Heroicons (gratuitos):
```html
<!-- Research Icon -->
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>

<!-- Sitemap Icon -->
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z" />
</svg>

<!-- UI Design Icon -->
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
</svg>
```

Guarda estos como archivos `.svg` con los nombres correspondientes.

---

## ✅ Checklist Final

- [ ] Crear `research.svg` (64x64px)
- [ ] Crear `sitemap.svg` (64x64px)
- [ ] Crear `ui-design.svg` (64x64px)
- [ ] Colocar archivos en `/public/images/projects/sandra-jordan/`
- [ ] Verificar que aparezcan en la página del proyecto
- [ ] Ajustar colores si es necesario

---

**Nota**: Los archivos SVG pueden tener cualquier tamaño interno, pero se escalarán automáticamente a 48-64px en la interfaz.
