interface IProject {
	buidlersOnProject: IBuilder[];
}

interface IBuilder {
	buidler: {
		name: string;
		avatar: string;
	};
}
