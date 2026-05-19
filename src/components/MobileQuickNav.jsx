import "./MobileQuickNav.css";

const sections = ["home", "about", "interpreter", "services", "reviews", "contacts"];

function MobileQuickNav() {
  const scrollToSection = (direction) => {
    if (direction === "up") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const headerHeight = document.querySelector(".header")?.offsetHeight || 0;
    const currentY = window.scrollY + headerHeight + 40;

    const sectionPositions = sections
      .map((id) => {
        const element = document.getElementById(id);
        if (!element) return null;

        return {
          id,
          top: element.offsetTop,
        };
      })
      .filter(Boolean);

    const nextSection = sectionPositions.find(
      (section) => section.top > currentY
    );

    const target = document.getElementById(
      nextSection ? nextSection.id : sections[sections.length - 1]
    );

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="mobileQuickNav">
      <button type="button" onClick={() => scrollToSection("up")} aria-label="Наверх">
        ↑
      </button>

      <button type="button" onClick={() => scrollToSection("down")} aria-label="Вниз">
        ↓
      </button>
    </div>
  );
}

export default MobileQuickNav;