type arrType = { name: string, value: string };

class MetaDataStore {

    private user = ['TEACHER', 'STUDENT'];
    private status = ['ALL', 'ACTIVE', 'INACTIVE', 'DISCONTINUED'];
    private gender = ['MALE', 'FEMALE', 'OTHER'];
    private category = ['GENERAL', 'OBC', 'SC_ST', 'MINORITY', 'OTHER'];
    private religion = ['HINDU', 'MUSLIM', 'SIKH', 'CHRISTIAN', 'OTHER'];
    private maritalStatus = ['MARRIED', 'UNMARRIED', 'OTHER'];
    private feeStatus = ['ALL','PAID', 'DUE', 'PARTIAL'];

    public classData: Array<{ name: string, value: number }> = [{ name: 'ALL', value: -1 }];
    public sectionData: Array<arrType> = [{ name: 'ALL', value: 'ALL' }];
    public userType: Array<arrType> = [];
    public statusData: Array<arrType> = [];
    public genderData: Array<arrType> = [];
    public categoryData: Array<arrType> = [];
    public religionData: Array<arrType> = [];
    public mariedStatusData: Array<arrType> = [];
    public feeStatusData: Array<arrType> = [];

    constructor() {
        for (let i = 1; i <= 12; i++)
            this.classData.push({ name: `Class ${i}`, value: i });
        //set section data (A to Z)
        for (let i = 65; i <= 90; i++) {
            let char = String.fromCharCode(i);
            this.sectionData.push({ name: `Section ${char}`, value: char });
        }
        //set user types
        this.userType = this.user.map((user) => ({ name: user, value: user }));
        this.genderData = this.gender.map((g) => ({ name: g, value: g }));
        this.statusData = this.status.map((s) => ({ name: s, value: s }));
        this.categoryData = this.category.map((c) => ({ name: c, value: c }));
        this.religionData = this.religion.map((r) => ({ name: r, value: r }));
        this.mariedStatusData = this.maritalStatus.map((ms) => ({ name: ms, value: ms }));
        this.feeStatusData = this.feeStatus.map((f) => ({name:f,value:f}));
    }
}

export const metaDataStore = new MetaDataStore();