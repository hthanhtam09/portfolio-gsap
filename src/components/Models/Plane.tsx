import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Mesh } from "three";

import planeScene from "@/assets/3d/plane.glb";

interface PlaneProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

// The Plane component
export function Plane({ ...props }: Readonly<PlaneProps>) {
  const ref = useRef<Mesh>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { scene, animations } = useGLTF(planeScene) as any & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    animations: any[];
  };

  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (actions && actions["Take 001"]) {
      actions["Take 001"].play();
    }
  }, [actions]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}
