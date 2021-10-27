export default function rippleAction(node)
{
    // add the ripple effect on click
    function handleClick(ev)
    {
        const circle = document.createElement("span");
        const diameter = Math.max(node.clientWidth, node.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${ev.offsetX - radius}px`;
        circle.style.top = `${ev.offsetY - radius}px`;
        circle.classList.add("ripple");

        const ripple = node.getElementsByClassName("ripple")[0];

        if (ripple) {
            ripple.remove();
        }

        node.appendChild(circle);
    }

    // make sure that you are using position relative on the element
    node.style.position = "relative";
    node.style.overflow = "hidden";
    node.addEventListener("click", handleClick);

    return {
        destroy: () => {
            node.removeEventListener("click", handleClick)
        }
    }
}